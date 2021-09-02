:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'numkit'
.. highlight: bash

numkit
======

.. conda:recipe:: numkit
   :replaces_section_title:
   :noindex:

   Numerical first aid kit \(with numpy\/scipy\).

   :homepage: https://github.com/Becksteinlab/numkit
   :documentation: hhttps://numkit.readthedocs.io
   
   :license: BSD / Modified BSD
   :recipe: /`numkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/numkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/numkit/meta.yaml>`_

   numkit is a small collection of numerical helper functions and classes
   \(\"numerical first aid kit\"\) that have been useful for GromacsWrapper
   and related projects.



.. conda:package:: numkit

   |downloads_numkit| |docker_numkit|

   :versions:
      
      

      ``1.2.1-0``

      

   
   :depends numpy: 
   :depends python: 
   :depends scipy: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install numkit

   and update with::

      conda update numkit

   or use the docker container::

      docker pull quay.io/biocontainers/numkit:<tag>

   (see `numkit/tags`_ for valid values for ``<tag>``)


.. |downloads_numkit| image:: https://img.shields.io/conda/dn/bioconda/numkit.svg?style=flat
   :target: https://anaconda.org/bioconda/numkit
   :alt:   (downloads)
.. |docker_numkit| image:: https://quay.io/repository/biocontainers/numkit/status
   :target: https://quay.io/repository/biocontainers/numkit
.. _`numkit/tags`: https://quay.io/repository/biocontainers/numkit?tab=tags


.. raw:: html

    <script>
        var package = "numkit";
        var versions = ["1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/numkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/numkit/README.html