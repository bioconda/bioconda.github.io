:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kipoi'
.. highlight: bash

kipoi
=====

.. conda:recipe:: kipoi
   :replaces_section_title:
   :noindex:

   Kipoi\: model zoo for genomics

   :homepage: https://kipoi.org
   :documentation: https://kipoi.org/docs/
   
   :developer docs: https://github.com/kipoi/kipoi
   :license: MIT / MIT
   :recipe: /`kipoi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi/meta.yaml>`_

   Kipoi\: model zoo for genomics.


.. conda:package:: kipoi

   |downloads_kipoi| |docker_kipoi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.6-0</code>,  <code>0.8.5-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.0-0</code>,  </span></summary>
      

      ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.0-0``,  ``0.6.36-0``,  ``0.6.35-0``,  ``0.6.34-0``,  ``0.6.33-0``,  ``0.6.31-0``,  ``0.6.30-0``,  ``0.6.29-0``,  ``0.6.25-1``,  ``0.6.25-0``,  ``0.6.24-1``,  ``0.6.24-0``,  ``0.6.17-0``,  ``0.6.16-0``,  ``0.6.14-0``,  ``0.6.13-0``,  ``0.6.12-0``,  ``0.6.5-0``,  ``0.6.3-0``,  ``0.6.0-0``,  ``0.5.7-0``,  ``0.3.6-1``,  ``0.3.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on attrs: ``<=21.4.0``
   :depends on colorlog: 
   :depends on cookiecutter: ``>=1.6.0``
   :depends on deprecation: ``>=2.0.6``
   :depends on future: 
   :depends on h5py: 
   :depends on jinja2: 
   :depends on kipoi-conda: ``>=0.1.6``
   :depends on kipoi-utils: ``>=0.7.5``
   :depends on numpy: 
   :depends on pandas: ``>=0.21.0``
   :depends on python: 
   :depends on pyyaml: 
   :depends on related: ``>=0.6.0``
   :depends on tinydb: 
   :depends on tqdm: 
   :depends on urllib3: ``>=1.21.1``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install kipoi

to add into an existing workspace instead, run::

    pixi add kipoi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kipoi

Alternatively, to install into a new environment, run::

    conda create -n envname kipoi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kipoi:<tag>

(see `kipoi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kipoi| image:: https://img.shields.io/conda/dn/bioconda/kipoi.svg?style=flat
   :target: https://anaconda.org/bioconda/kipoi
   :alt:   (downloads)
.. |docker_kipoi| image:: https://quay.io/repository/biocontainers/kipoi/status
   :target: https://quay.io/repository/biocontainers/kipoi
.. _`kipoi/tags`: https://quay.io/repository/biocontainers/kipoi?tab=tags


.. raw:: html

    <script>
        var package = "kipoi";
        var versions = ["0.8.6","0.8.5","0.8.3","0.8.2","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kipoi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kipoi/README.html