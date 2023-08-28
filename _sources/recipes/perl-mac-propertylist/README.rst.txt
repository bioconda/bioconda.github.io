:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mac-propertylist'
.. highlight: bash

perl-mac-propertylist
=====================

.. conda:recipe:: perl-mac-propertylist
   :replaces_section_title:
   :noindex:

   work with Mac plists at a low level

   :homepage: https://github.com/briandfoy/mac-propertylist
   :license: artistic_2
   :recipe: /`perl-mac-propertylist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mac-propertylist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mac-propertylist/meta.yaml>`_

   


.. conda:package:: perl-mac-propertylist

   |downloads_perl-mac-propertylist| |docker_perl-mac-propertylist|

   :versions:
      
      

      ``1.504-0``,  ``1.503-0``,  ``1.502-0``,  ``1.413-1``,  ``1.413-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-math-bigint: 
   :depends perl-mime-base64: 
   :depends perl-parent: 
   :depends perl-time-local: 
   :depends perl-xml-entities: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-mac-propertylist

   and update with::

      mamba update perl-mac-propertylist

  To create a new environment, run::

      mamba create --name myenvname perl-mac-propertylist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-mac-propertylist:<tag>

   (see `perl-mac-propertylist/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mac-propertylist| image:: https://img.shields.io/conda/dn/bioconda/perl-mac-propertylist.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mac-propertylist
   :alt:   (downloads)
.. |docker_perl-mac-propertylist| image:: https://quay.io/repository/biocontainers/perl-mac-propertylist/status
   :target: https://quay.io/repository/biocontainers/perl-mac-propertylist
.. _`perl-mac-propertylist/tags`: https://quay.io/repository/biocontainers/perl-mac-propertylist?tab=tags


.. raw:: html

    <script>
        var package = "perl-mac-propertylist";
        var versions = ["1.504","1.503","1.502","1.413","1.413"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mac-propertylist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mac-propertylist/README.html