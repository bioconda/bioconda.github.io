:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyvolve'
.. highlight: bash

pyvolve
=======

.. conda:recipe:: pyvolve
   :replaces_section_title:

   Pyvolve is an open\-source Python module for simulating sequences along a phylogenetic tree according to continuous\-time Markov models of sequence evolution. Please cite\: Spielman\, S.J.\, and Wilke\, C.O. \(2015\). Pyvolve\: A Flexible Python Module for Simulating Sequences along Phylogenies. PLOS ONE 10\, e0139047.

   :homepage: https://github.com/sjspielman/pyvolve
   :license: BSD / FreeBSD
   :recipe: /`pyvolve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyvolve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyvolve/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pone.0139047`

   


.. conda:package:: pyvolve

   |downloads_pyvolve| |docker_pyvolve|

   :versions: 0.9.0-0, 0.8.9-0, 0.8.8-2, 0.8.8-0, 0.8.7-0
   
   :depends biopython: 
   
   :depends numpy: 
   
   :depends python: 
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyvolve

   and update with::

      conda update pyvolve

   or use the docker container::

      docker pull quay.io/biocontainers/pyvolve:<tag>

   (see `pyvolve/tags`_ for valid values for ``<tag>``)


.. |downloads_pyvolve| image:: https://img.shields.io/conda/dn/bioconda/pyvolve.svg?style=flat
   :alt:   (downloads)
.. |docker_pyvolve| image:: https://quay.io/repository/biocontainers/pyvolve/status
   :target: https://quay.io/repository/biocontainers/pyvolve
.. _`pyvolve/tags`: https://quay.io/repository/biocontainers/pyvolve?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyvolve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyvolve/README.html