:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quantwiz-iq'
.. highlight: bash

quantwiz-iq
===========

.. conda:recipe:: quantwiz-iq
   :replaces_section_title:
   :noindex:

   QuantWiz\-IQ is a tool for reporter based MS\/MS quantitation using iTRAQ or TMT tags from shotgun proteomics experiments.

   :homepage: https://sourceforge.net/projects/quantwiz/
   :license: GPL
   :recipe: /`quantwiz-iq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantwiz-iq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantwiz-iq/meta.yaml>`_

   


.. conda:package:: quantwiz-iq

   |downloads_quantwiz-iq| |docker_quantwiz-iq|

   :versions:
      
      

      ``2.0-1``,  ``2.0-0``

      

   
   :depends perl: 
   :depends perl-math-matrix: ``0.8.*``
   :depends perl-math-matrixreal: ``2.13.*``
   :depends perl-mime-base64: ``3.15.*``
   :depends perl-xml-twig: ``3.52.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quantwiz-iq

   and update with::

      conda update quantwiz-iq

   or use the docker container::

      docker pull quay.io/biocontainers/quantwiz-iq:<tag>

   (see `quantwiz-iq/tags`_ for valid values for ``<tag>``)


.. |downloads_quantwiz-iq| image:: https://img.shields.io/conda/dn/bioconda/quantwiz-iq.svg?style=flat
   :target: https://anaconda.org/bioconda/quantwiz-iq
   :alt:   (downloads)
.. |docker_quantwiz-iq| image:: https://quay.io/repository/biocontainers/quantwiz-iq/status
   :target: https://quay.io/repository/biocontainers/quantwiz-iq
.. _`quantwiz-iq/tags`: https://quay.io/repository/biocontainers/quantwiz-iq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quantwiz-iq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quantwiz-iq/README.html