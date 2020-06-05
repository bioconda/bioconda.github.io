:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybedgraph'
.. highlight: bash

pybedgraph
==========

.. conda:recipe:: pybedgraph
   :replaces_section_title:
   :noindex:

   A package for fast operations on 1\-dimensional genomic signal tracks

   :homepage: https://github.com/TheJacksonLaboratory/pyBedGraph
   :license: MIT / MIT
   :recipe: /`pybedgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedgraph/meta.yaml>`_

   


.. conda:package:: pybedgraph

   |downloads_pybedgraph| |docker_pybedgraph|

   :versions:
      
      

      ``0.5.43-0``,  ``0.5.42-0``,  ``0.5.39-0``,  ``0.5.38-0``,  ``0.5.37-0``,  ``0.5.36-0``,  ``0.5.35-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends numpy: ``>=1.16.4``
   :depends pybigwig: ``>=0.3.16``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pybedgraph

   and update with::

      conda update pybedgraph

   or use the docker container::

      docker pull quay.io/biocontainers/pybedgraph:<tag>

   (see `pybedgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_pybedgraph| image:: https://img.shields.io/conda/dn/bioconda/pybedgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/pybedgraph
   :alt:   (downloads)
.. |docker_pybedgraph| image:: https://quay.io/repository/biocontainers/pybedgraph/status
   :target: https://quay.io/repository/biocontainers/pybedgraph
.. _`pybedgraph/tags`: https://quay.io/repository/biocontainers/pybedgraph?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybedgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybedgraph/README.html