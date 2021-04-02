:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-featureio'
.. highlight: bash

perl-bio-featureio
==================

.. conda:recipe:: perl-bio-featureio
   :replaces_section_title:
   :noindex:

   Modules for reading\, writing\, and manipulating sequence features

   :homepage: https://metacpan.org/release/Bio-FeatureIO
   :license: perl_5
   :recipe: /`perl-bio-featureio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-featureio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-featureio/meta.yaml>`_

   


.. conda:package:: perl-bio-featureio

   |downloads_perl-bio-featureio| |docker_perl-bio-featureio|

   :versions:
      
      

      ``1.6.905-3``,  ``1.6.905-2``,  ``1.6.905-1``,  ``1.6.905-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-bioperl-core: 
   :depends perl-tree-dag_node: 
   :depends perl-uri: 
   :depends perl-xml-dom: 
   :depends perl-xml-dom-xpath: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-featureio

   and update with::

      conda update perl-bio-featureio

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-featureio:<tag>

   (see `perl-bio-featureio/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-featureio| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-featureio.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-featureio
   :alt:   (downloads)
.. |docker_perl-bio-featureio| image:: https://quay.io/repository/biocontainers/perl-bio-featureio/status
   :target: https://quay.io/repository/biocontainers/perl-bio-featureio
.. _`perl-bio-featureio/tags`: https://quay.io/repository/biocontainers/perl-bio-featureio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-featureio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-featureio/README.html