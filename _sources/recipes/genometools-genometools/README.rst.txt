.. title:: Package Recipe 'genometools-genometools'
.. highlight: bash


genometools-genometools
=======================

.. conda:recipe:: genometools-genometools
   :replaces_section_title:

   GenomeTools genome analysis system.

   :homepage: http://genometools.org/
   :documentation: http://genometools.org/documentation.html
   
   :developer docs: https://github.com/genometools/genometools
   :license: BSD
   :recipe: /`genometools-genometools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometools-genometools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometools-genometools/meta.yaml>`_
   :links: doi: :doi:`10.1109/TCBB.2013.68`

   


.. conda:package:: genometools-genometools

   |downloads_genometools-genometools| |docker_genometools-genometools|

   :versions: 1.5.10, 1.5.9

   :depends: :conda:package:`gettext`  :conda:package:`xorg-libsm`  :conda:package:`xorg-libxext`  :conda:package:`xorg-libxrender`  

   :required~by: |required_by_genometools-genometools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genometools-genometools

   and update with::

      conda update genometools-genometools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/genometools-genometools


.. |required_by_genometools-genometools| conda:required_by:: genometools-genometools
.. |downloads_genometools-genometools| image:: https://img.shields.io/conda/dn/bioconda/genometools-genometools.svg?style=flat
   :alt:   (downloads)
.. |docker_genometools-genometools| image:: https://quay.io/repository/biocontainers/genometools-genometools/status
   :target: https://quay.io/repository/biocontainers/genometools-genometools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genometools-genometools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genometools-genometools/README.html

