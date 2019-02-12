.. title:: Package Recipe 'meme'
.. highlight: bash


meme
====

.. conda:recipe:: meme
   :replaces_section_title:

   Motif based sequence Analysis tools

   :homepage: http://alternate.meme-suite.org/
   :license: Custom
   :recipe: /`meme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meme/meta.yaml>`_

   


.. conda:package:: meme

   |downloads_meme| |docker_meme|

   :versions: 5.0.2, 4.12.0, 4.11.2, 4.11.1

   :depends: :conda:package:`expat` >=2.2.5,<2.3.0a0 :conda:package:`ghostscript`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`libxml2` >=2.9.8,<2.10.0a0 :conda:package:`libxslt` >=1.1.32,<2.0a0 :conda:package:`openmpi` >=3.1,<3.2.0a0 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-cgi`  :conda:package:`perl-html-parser`  :conda:package:`perl-html-template`  :conda:package:`perl-html-tree`  :conda:package:`perl-log-log4perl`  :conda:package:`perl-math-cdf`  :conda:package:`perl-xml-parser`  :conda:package:`perl-xml-simple`  :conda:package:`perl-yaml`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`yaml` >=0.1.7,<0.2.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_meme|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install meme

   and update with::

      conda update meme

   or use the docker container::

      docker pull quay.io/repository/biocontainers/meme


.. |required_by_meme| conda:required_by:: meme
.. |downloads_meme| image:: https://img.shields.io/conda/dn/bioconda/meme.svg?style=flat
   :alt:   (downloads)
.. |docker_meme| image:: https://quay.io/repository/biocontainers/meme/status
   :target: https://quay.io/repository/biocontainers/meme







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meme/README.html

