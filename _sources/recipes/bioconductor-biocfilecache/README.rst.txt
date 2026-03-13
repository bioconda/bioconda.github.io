:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocfilecache'
.. highlight: bash

bioconductor-biocfilecache
==========================

.. conda:recipe:: bioconductor-biocfilecache
   :replaces_section_title:
   :noindex:

   Manage Files Across Sessions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BiocFileCache.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocfilecache <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocfilecache>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocfilecache/meta.yaml>`_

   This package creates a persistent on\-disk cache of files that the user can add\, update\, and retrieve. It is useful for managing resources \(such as custom Txdb objects\) that are costly or difficult to create\, web resources\, and data files used across sessions.


.. conda:package:: bioconductor-biocfilecache

   |downloads_bioconductor-biocfilecache| |docker_bioconductor-biocfilecache|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0-0</code>,  <code>2.14.0-0</code>,  <code>2.10.1-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``3.0.0-0``,  ``2.14.0-0``,  ``2.10.1-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-curl: 
   :depends on r-dbi: 
   :depends on r-dbplyr: ``>=1.0.0``
   :depends on r-dplyr: 
   :depends on r-filelock: 
   :depends on r-httr2: 
   :depends on r-rsqlite: 

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

    pixi global install bioconductor-biocfilecache

to add into an existing workspace instead, run::

    pixi add bioconductor-biocfilecache

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biocfilecache

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biocfilecache

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biocfilecache:<tag>

(see `bioconductor-biocfilecache/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biocfilecache| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocfilecache.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocfilecache
   :alt:   (downloads)
.. |docker_bioconductor-biocfilecache| image:: https://quay.io/repository/biocontainers/bioconductor-biocfilecache/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocfilecache
.. _`bioconductor-biocfilecache/tags`: https://quay.io/repository/biocontainers/bioconductor-biocfilecache?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocfilecache";
        var versions = ["3.0.0","2.14.0","2.10.1","2.8.0","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocfilecache/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocfilecache/README.html