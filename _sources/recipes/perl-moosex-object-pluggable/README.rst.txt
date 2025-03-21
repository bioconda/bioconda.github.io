:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-object-pluggable'
.. highlight: bash

perl-moosex-object-pluggable
============================

.. conda:recipe:: perl-moosex-object-pluggable/0.0014
   :replaces_section_title:
   :noindex:

   Make your classes pluggable

   :homepage: https://github.com/moose/MooseX-Object-Pluggable
   :license: perl_5
   :recipe: /`perl-moosex-object-pluggable <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-object-pluggable>`_/`0.0014 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-object-pluggable/0.0014>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-object-pluggable/0.0014/meta.yaml>`_

   


.. conda:package:: perl-moosex-object-pluggable

   |downloads_perl-moosex-object-pluggable| |docker_perl-moosex-object-pluggable|

   :versions:
      
      

      ``0.0014-1``,  ``0.0014-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-module-pluggable: 
   :depends perl-module-runtime: 
   :depends perl-moose: 
   :depends perl-namespace-autoclean: 
   :depends perl-try-tiny: 
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

      mamba install perl-moosex-object-pluggable

   and update with::

      mamba update perl-moosex-object-pluggable

  To create a new environment, run::

      mamba create --name myenvname perl-moosex-object-pluggable

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-object-pluggable:<tag>

   (see `perl-moosex-object-pluggable/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-object-pluggable| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-object-pluggable.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-object-pluggable
   :alt:   (downloads)
.. |docker_perl-moosex-object-pluggable| image:: https://quay.io/repository/biocontainers/perl-moosex-object-pluggable/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-object-pluggable
.. _`perl-moosex-object-pluggable/tags`: https://quay.io/repository/biocontainers/perl-moosex-object-pluggable?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-object-pluggable";
        var versions = ["0.0014","0.0014"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-object-pluggable/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-object-pluggable/README.html