:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psm-utils'
.. highlight: bash

psm-utils
=========

.. conda:recipe:: psm-utils
   :replaces_section_title:
   :noindex:

   Common utilities for parsing and handling peptide\-spectrum matches and search engine results.

   :homepage: https://github.com/compomics/psm_utils
   :documentation: https://psm_utils.readthedocs.io
   
   :license: APACHE / Apache-2.0
   :recipe: /`psm-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psm-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psm-utils/meta.yaml>`_
   :links: doi: :doi:`10.1021/acs.jproteome.2c00609`, biotools: :biotools:`psm_utils`

   


.. conda:package:: psm-utils

   |downloads_psm-utils| |docker_psm-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0.post1-1</code>,  <code>1.5.0.post1-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0.post1-1``,  ``1.5.0.post1-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.0-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.2.3-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: 
   :depends on lxml: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on psims: 
   :depends on pyarrow: 
   :depends on pydantic: ``>=2``
   :depends on pyteomics: ``>=4``
   :depends on python: ``>=3.10``
   :depends on rich: 
   :depends on sqlalchemy: ``>=2``

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

    pixi global install psm-utils

to add into an existing workspace instead, run::

    pixi add psm-utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install psm-utils

Alternatively, to install into a new environment, run::

    conda create -n envname psm-utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/psm-utils:<tag>

(see `psm-utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_psm-utils| image:: https://img.shields.io/conda/dn/bioconda/psm-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/psm-utils
   :alt:   (downloads)
.. |docker_psm-utils| image:: https://quay.io/repository/biocontainers/psm-utils/status
   :target: https://quay.io/repository/biocontainers/psm-utils
.. _`psm-utils/tags`: https://quay.io/repository/biocontainers/psm-utils?tab=tags


.. raw:: html

    <script>
        var package = "psm-utils";
        var versions = ["1.5.2","1.5.1","1.5.0.post1","1.5.0.post1","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psm-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psm-utils/README.html