:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-fileattribute'
.. highlight: bash

perl-moosex-fileattribute
=========================

.. conda:recipe:: perl-moosex-fileattribute
   :replaces_section_title:
   :noindex:

   Sugar for classes that have file or directory attributes

   :homepage: https://github.com/moose/MooseX-FileAttribute
   :license: perl_5
   :recipe: /`perl-moosex-fileattribute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-fileattribute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-fileattribute/meta.yaml>`_

   


.. conda:package:: perl-moosex-fileattribute

   |downloads_perl-moosex-fileattribute| |docker_perl-moosex-fileattribute|

   :versions:
      
      

      ``0.03-1``,  ``0.03-0``,  ``0.02-1``,  ``0.02-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-moosex-types: 
   :depends perl-moosex-types-path-class: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-moosex-fileattribute

   and update with::

      mamba update perl-moosex-fileattribute

  To create a new environment, run::

      mamba create --name myenvname perl-moosex-fileattribute

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-fileattribute:<tag>

   (see `perl-moosex-fileattribute/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-fileattribute| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-fileattribute.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-fileattribute
   :alt:   (downloads)
.. |docker_perl-moosex-fileattribute| image:: https://quay.io/repository/biocontainers/perl-moosex-fileattribute/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-fileattribute
.. _`perl-moosex-fileattribute/tags`: https://quay.io/repository/biocontainers/perl-moosex-fileattribute?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-fileattribute";
        var versions = ["0.03","0.03","0.02","0.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-fileattribute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-fileattribute/README.html