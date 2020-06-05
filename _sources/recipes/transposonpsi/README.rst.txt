:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transposonpsi'
.. highlight: bash

transposonpsi
=============

.. conda:recipe:: transposonpsi
   :replaces_section_title:
   :noindex:

   TransposonPSI is an analysis tool to identify protein or nucleic acid sequence homology to proteins encoded by diverse families of transposable elements.

   :homepage: http://transposonpsi.sourceforge.net/
   :license: artistic-2.0
   :recipe: /`transposonpsi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transposonpsi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transposonpsi/meta.yaml>`_

   


.. conda:package:: transposonpsi

   |downloads_transposonpsi| |docker_transposonpsi|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends blast-legacy: ``2.2.26.*``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-bioperl: ``>=1.7.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install transposonpsi

   and update with::

      conda update transposonpsi

   or use the docker container::

      docker pull quay.io/biocontainers/transposonpsi:<tag>

   (see `transposonpsi/tags`_ for valid values for ``<tag>``)


.. |downloads_transposonpsi| image:: https://img.shields.io/conda/dn/bioconda/transposonpsi.svg?style=flat
   :target: https://anaconda.org/bioconda/transposonpsi
   :alt:   (downloads)
.. |docker_transposonpsi| image:: https://quay.io/repository/biocontainers/transposonpsi/status
   :target: https://quay.io/repository/biocontainers/transposonpsi
.. _`transposonpsi/tags`: https://quay.io/repository/biocontainers/transposonpsi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transposonpsi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transposonpsi/README.html