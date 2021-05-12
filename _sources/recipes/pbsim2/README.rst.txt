:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbsim2'
.. highlight: bash

pbsim2
======

.. conda:recipe:: pbsim2
   :replaces_section_title:
   :noindex:

   PBSIM2\: a simulator for long read sequencers with a novel generative model of quality scores

   :homepage: https://github.com/yukiteruono/pbsim2
   :license: GPL-2.0
   :recipe: /`pbsim2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbsim2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbsim2/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaa835`

   


.. conda:package:: pbsim2

   |downloads_pbsim2| |docker_pbsim2|

   :versions:
      
      

      ``2.0.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbsim2

   and update with::

      conda update pbsim2

   or use the docker container::

      docker pull quay.io/biocontainers/pbsim2:<tag>

   (see `pbsim2/tags`_ for valid values for ``<tag>``)


.. |downloads_pbsim2| image:: https://img.shields.io/conda/dn/bioconda/pbsim2.svg?style=flat
   :target: https://anaconda.org/bioconda/pbsim2
   :alt:   (downloads)
.. |docker_pbsim2| image:: https://quay.io/repository/biocontainers/pbsim2/status
   :target: https://quay.io/repository/biocontainers/pbsim2
.. _`pbsim2/tags`: https://quay.io/repository/biocontainers/pbsim2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbsim2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbsim2/README.html