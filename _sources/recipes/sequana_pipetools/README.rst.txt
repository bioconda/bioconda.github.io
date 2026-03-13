:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequana_pipetools'
.. highlight: bash

sequana_pipetools
=================

.. conda:recipe:: sequana_pipetools
   :replaces_section_title:
   :noindex:

   A set of tools to help building or using Sequana pipelines

   :homepage: https://github.com/sequana/sequana_pipetools
   :documentation: https://sequana.readthedocs.io/en/main/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`sequana_pipetools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana_pipetools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana_pipetools/meta.yaml>`_

   


.. conda:package:: sequana_pipetools

   |downloads_sequana_pipetools| |docker_sequana_pipetools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.2-0</code>,  <code>0.9.4-0</code>,  <code>0.9.0-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.6-0</code>,  </span></summary>
      

      ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``0.9.4-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.6-0``,  ``0.7.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aiohttp: ``>=3.8.4``
   :depends on charset-normalizer: ``>=2.0.0,<3.0.0``
   :depends on deprecated: ``>=1.2.13``
   :depends on easydev: ``>=0.12.1``
   :depends on importlib_resources: ``>=5.4.0``
   :depends on packaging: ``>=23.1``
   :depends on parse: ``>=1.19.0``
   :depends on pykwalify: ``>=1.8``
   :depends on python: ``>=3.8``
   :depends on pyyaml: ``>=1.3``
   :depends on requests: 
   :depends on ruamel.yaml: ``>=0.17.32``
   :depends on tqdm: ``>=4.65``
   :depends on versionix: ``>=0.2.0``

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

    pixi global install sequana_pipetools

to add into an existing workspace instead, run::

    pixi add sequana_pipetools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sequana_pipetools

Alternatively, to install into a new environment, run::

    conda create -n envname sequana_pipetools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sequana_pipetools:<tag>

(see `sequana_pipetools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sequana_pipetools| image:: https://img.shields.io/conda/dn/bioconda/sequana_pipetools.svg?style=flat
   :target: https://anaconda.org/bioconda/sequana_pipetools
   :alt:   (downloads)
.. |docker_sequana_pipetools| image:: https://quay.io/repository/biocontainers/sequana_pipetools/status
   :target: https://quay.io/repository/biocontainers/sequana_pipetools
.. _`sequana_pipetools/tags`: https://quay.io/repository/biocontainers/sequana_pipetools?tab=tags


.. raw:: html

    <script>
        var package = "sequana_pipetools";
        var versions = ["1.4.0","1.3.1","1.3.0","1.2.2","0.9.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequana_pipetools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequana_pipetools/README.html