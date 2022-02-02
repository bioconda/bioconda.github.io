:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-yaml-libyaml'
.. highlight: bash

perl-yaml-libyaml
=================

.. conda:recipe:: perl-yaml-libyaml/0.63
   :replaces_section_title:
   :noindex:

   Perl YAML Serialization using XS and libyaml 

   :homepage: https://metacpan.org/release/YAML-LibYAML
   :license: perl_5
   :recipe: /`perl-yaml-libyaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml-libyaml>`_/`0.63 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml-libyaml/0.63>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml-libyaml/0.63/meta.yaml>`_

   


.. conda:package:: perl-yaml-libyaml

   |downloads_perl-yaml-libyaml| |docker_perl-yaml-libyaml|

   :versions:
      
      

      ``0.66-2``,  ``0.66-1``,  ``0.66-0``,  ``0.63-2``,  ``0.63-1``,  ``0.63-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-yaml-libyaml

   and update with::

      conda update perl-yaml-libyaml

   or use the docker container::

      docker pull quay.io/biocontainers/perl-yaml-libyaml:<tag>

   (see `perl-yaml-libyaml/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-yaml-libyaml| image:: https://img.shields.io/conda/dn/bioconda/perl-yaml-libyaml.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-yaml-libyaml
   :alt:   (downloads)
.. |docker_perl-yaml-libyaml| image:: https://quay.io/repository/biocontainers/perl-yaml-libyaml/status
   :target: https://quay.io/repository/biocontainers/perl-yaml-libyaml
.. _`perl-yaml-libyaml/tags`: https://quay.io/repository/biocontainers/perl-yaml-libyaml?tab=tags


.. raw:: html

    <script>
        var package = "perl-yaml-libyaml";
        var versions = ["0.66","0.66","0.66","0.63","0.63"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-yaml-libyaml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-yaml-libyaml/README.html