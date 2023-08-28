:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-types-path-class'
.. highlight: bash

perl-moosex-types-path-class
============================

.. conda:recipe:: perl-moosex-types-path-class
   :replaces_section_title:
   :noindex:

   A Path\:\:Class type library for Moose

   :homepage: https://github.com/moose/MooseX-Types-Path-Class
   :license: perl_5
   :recipe: /`perl-moosex-types-path-class <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-types-path-class>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-types-path-class/meta.yaml>`_

   


.. conda:package:: perl-moosex-types-path-class

   |downloads_perl-moosex-types-path-class| |docker_perl-moosex-types-path-class|

   :versions:
      
      

      ``0.09-5``,  ``0.09-4``,  ``0.09-3``,  ``0.09-2``,  ``0.09-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-moosex-types: 
   :depends perl-path-class: 
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

      mamba install perl-moosex-types-path-class

   and update with::

      mamba update perl-moosex-types-path-class

  To create a new environment, run::

      mamba create --name myenvname perl-moosex-types-path-class

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-types-path-class:<tag>

   (see `perl-moosex-types-path-class/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-types-path-class| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-types-path-class.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-types-path-class
   :alt:   (downloads)
.. |docker_perl-moosex-types-path-class| image:: https://quay.io/repository/biocontainers/perl-moosex-types-path-class/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-types-path-class
.. _`perl-moosex-types-path-class/tags`: https://quay.io/repository/biocontainers/perl-moosex-types-path-class?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-types-path-class";
        var versions = ["0.09","0.09","0.09","0.09","0.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-types-path-class/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-types-path-class/README.html