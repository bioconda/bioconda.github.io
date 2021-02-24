:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'curves'
.. highlight: bash

curves
======

.. conda:recipe:: curves
   :replaces_section_title:
   :noindex:

   CURVES\+ for analyzing and visualizing the helical\, backbone and groove parameters of nucleic acid structures.

   :homepage: https://bisi.ibcp.fr/tools/curves_plus/index.html
   :license: APACHE / Apache Software License
   :recipe: /`curves <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curves>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curves/meta.yaml>`_

   Curves\+ is a revised version of the Curves approach for analysing the structure of nucleic acids. It respects the international conventions for nucleic acid analysis\, runs much faster and provides new data.


.. conda:package:: curves

   |downloads_curves| |docker_curves|

   :versions:
      
      

      ``2.6.0-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libgfortran-ng: 
   :depends libgfortran4: ``>=7.5.0``
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