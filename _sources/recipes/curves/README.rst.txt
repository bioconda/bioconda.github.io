:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'curves'
.. highlight: bash

curves
======

.. conda:recipe:: curves
   :replaces_section_title:
   :noindex:

   CURVES\+\: Conformational analysis of single nucleic acid structures or of molecular dynamics trajectories

   :homepage: http://curvesplus.bsc.es/misc
   :license: APACHE / Apache Software License
   :recipe: /`curves <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curves>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curves/meta.yaml>`_

   Curves\+ is a revised version of the Curves approach for analysing the structure of nucleic acids. It respects the international conventions for nucleic acid analysis\, runs much faster and provides new data.


.. conda:package:: curves

   |downloads_curves| |docker_curves|

   :versions:
      
      

      ``3.0.0-1``,  ``3.0.0-0``,  ``2.6.0-0``

      

   
   :depends ambertools: ``20.*``
   :depends libcxx: ``>=11.1.0``
   :depends libgfortran: ``5.*``
   :depends libgfortran5: ``>=9.3.0``
   :depends libnetcdf: ``>=4.7.*``
   :depends libnetcdf: ``>=4.7.4,<4.7.5.0a0``
   :depends netcdf-fortran: ``>=4.5.3,<4.6.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install curves

   and update with::

      conda update curves

   or use the docker container::

      docker pull quay.io/biocontainers/curves:<tag>

   (see `curves/tags`_ for valid values for ``<tag>``)


.. |downloads_curves| image:: https://img.shields.io/conda/dn/bioconda/curves.svg?style=flat
   :target: https://anaconda.org/bioconda/curves
   :alt:   (downloads)
.. |docker_curves| image:: https://quay.io/repository/biocontainers/curves/status
   :target: https://quay.io/repository/biocontainers/curves
.. _`curves/tags`: https://quay.io/repository/biocontainers/curves?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/curves/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/curves/README.html