:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'godmd'
.. highlight: bash

godmd
=====

.. conda:recipe:: godmd
   :replaces_section_title:
   :noindex:

   GOdMD Conformational Transitions with discrete Molecular Dynamics

   :homepage: http://mmb.irbbarcelona.org/gitlab/adam/GOdMD
   :license: APACHE / Apache Software License
   :recipe: /`godmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/godmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/godmd/meta.yaml>`_

   GOdMD is a new method for determining pathways for conformational transitions in macromolecules based on the use of discrete molecular dynamics and biasing techniques based on a combination of essential dynamics and Maxwell\-Demon sampling techniques. The method can work with high efficiency at different levels of resolution\, including the atomistic one\, and can help to define initial pathways for further exploration by means of more accurate atomistic molecular dynamics simulations.


.. conda:package:: godmd

   |downloads_godmd| |docker_godmd|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install godmd

   and update with::

      conda update godmd

   or use the docker container::

      docker pull quay.io/biocontainers/godmd:<tag>

   (see `godmd/tags`_ for valid values for ``<tag>``)


.. |downloads_godmd| image:: https://img.shields.io/conda/dn/bioconda/godmd.svg?style=flat
   :target: https://anaconda.org/bioconda/godmd
   :alt:   (downloads)
.. |docker_godmd| image:: https://quay.io/repository/biocontainers/godmd/status
   :target: https://quay.io/repository/biocontainers/godmd
.. _`godmd/tags`: https://quay.io/repository/biocontainers/godmd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/godmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/godmd/README.html