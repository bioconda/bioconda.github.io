:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gromacswrapper'
.. highlight: bash

gromacswrapper
==============

.. conda:recipe:: gromacswrapper
   :replaces_section_title:
   :noindex:

   GromacsWrapper wraps system calls to GROMACS tools into thin Python classes.

   :homepage: https://github.com/Becksteinlab/GromacsWrapper
   :documentation: https://gromacswrapper.readthedocs.io
   
   :license: GPL / GPL-3.0
   :recipe: /`gromacswrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacswrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacswrapper/meta.yaml>`_

   GromacsWrapper is a Python package that wraps system calls to GROMACS
   tools into thin classes. This allows for fairly seamless integration
   of the GROMACS tools into Python scripts.



.. conda:package:: gromacswrapper

   |downloads_gromacswrapper| |docker_gromacswrapper|

   :versions:
      
      

      ``0.8.1-1``,  ``0.8.1-0``

      

   
   :depends matplotlib-base: 
   :depends numkit: 
   :depends numpy: 
   :depends python: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gromacswrapper

   and update with::

      conda update gromacswrapper

   or use the docker container::

      docker pull quay.io/biocontainers/gromacswrapper:<tag>

   (see `gromacswrapper/tags`_ for valid values for ``<tag>``)


.. |downloads_gromacswrapper| image:: https://img.shields.io/conda/dn/bioconda/gromacswrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/gromacswrapper
   :alt:   (downloads)
.. |docker_gromacswrapper| image:: https://quay.io/repository/biocontainers/gromacswrapper/status
   :target: https://quay.io/repository/biocontainers/gromacswrapper
.. _`gromacswrapper/tags`: https://quay.io/repository/biocontainers/gromacswrapper?tab=tags


.. raw:: html

    <script>
        var package = "gromacswrapper";
        var versions = ["0.8.1","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gromacswrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gromacswrapper/README.html