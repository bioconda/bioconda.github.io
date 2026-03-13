:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'micom'
.. highlight: bash

micom
=====

.. conda:recipe:: micom
   :replaces_section_title:
   :noindex:

   Microbial community modeling based on cobrapy.

   :homepage: https://github.com/micom-dev/micom
   :license: APACHE / Apache-2.0
   :recipe: /`micom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micom/meta.yaml>`_

   


.. conda:package:: micom

   |downloads_micom| |docker_micom|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.37.1-0</code>,  <code>0.37.0-0</code>,  <code>0.36.4-0</code>,  <code>0.36.3-0</code>,  <code>0.36.2-0</code>,  <code>0.36.1-0</code>,  <code>0.36.0-0</code>,  <code>0.35.0-0</code>,  <code>0.34.1-0</code>,  </span></summary>
      

      ``0.37.1-0``,  ``0.37.0-0``,  ``0.36.4-0``,  ``0.36.3-0``,  ``0.36.2-0``,  ``0.36.1-0``,  ``0.36.0-0``,  ``0.35.0-0``,  ``0.34.1-0``,  ``0.33.2-0``,  ``0.33.1-0``,  ``0.33.0-0``,  ``0.32.5-0``,  ``0.32.4-0``,  ``0.32.2-0``,  ``0.32.0-0``,  ``0.31.4-0``,  ``0.31.3-0``,  ``0.30.5-0``,  ``0.30.4-0``,  ``0.29.6-0``,  ``0.29.5-0``,  ``0.28.0-0``,  ``0.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cobra: ``>=0.17.1``
   :depends on jinja2: ``>=2.10.0``
   :depends on osqp: ``>=0.6.2``
   :depends on python: ``>=3``
   :depends on python-symengine: ``>=0.6.1``
   :depends on scikit-learn: ``>=0.22.0``
   :depends on scipy: ``>=1.0.0``

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

    pixi global install micom

to add into an existing workspace instead, run::

    pixi add micom

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install micom

Alternatively, to install into a new environment, run::

    conda create -n envname micom

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/micom:<tag>

(see `micom/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_micom| image:: https://img.shields.io/conda/dn/bioconda/micom.svg?style=flat
   :target: https://anaconda.org/bioconda/micom
   :alt:   (downloads)
.. |docker_micom| image:: https://quay.io/repository/biocontainers/micom/status
   :target: https://quay.io/repository/biocontainers/micom
.. _`micom/tags`: https://quay.io/repository/biocontainers/micom?tab=tags


.. raw:: html

    <script>
        var package = "micom";
        var versions = ["0.37.1","0.37.0","0.36.4","0.36.3","0.36.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/micom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/micom/README.html