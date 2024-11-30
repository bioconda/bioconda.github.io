:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-params-coerce'
.. highlight: bash

perl-params-coerce
==================

.. conda:recipe:: perl-params-coerce/0.14
   :replaces_section_title:
   :noindex:

   Allows your classes to do coercion of parameters

   :homepage: http://metacpan.org/pod/Params::Coerce
   :license: perl_5
   :recipe: /`perl-params-coerce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-coerce>`_/`0.14 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-coerce/0.14>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-coerce/0.14/meta.yaml>`_

   


.. conda:package:: perl-params-coerce

   |downloads_perl-params-coerce| |docker_perl-params-coerce|

   :versions:
      
      

      ``0.14-3``,  ``0.14-2``,  ``0.14-1``,  ``0.14-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-params-util: 
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

      mamba install perl-params-coerce

   and update with::

      mamba update perl-params-coerce

  To create a new environment, run::

      mamba create --name myenvname perl-params-coerce

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-params-coerce:<tag>

   (see `perl-params-coerce/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-params-coerce| image:: https://img.shields.io/conda/dn/bioconda/perl-params-coerce.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-params-coerce
   :alt:   (downloads)
.. |docker_perl-params-coerce| image:: https://quay.io/repository/biocontainers/perl-params-coerce/status
   :target: https://quay.io/repository/biocontainers/perl-params-coerce
.. _`perl-params-coerce/tags`: https://quay.io/repository/biocontainers/perl-params-coerce?tab=tags


.. raw:: html

    <script>
        var package = "perl-params-coerce";
        var versions = ["0.14","0.14","0.14","0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-params-coerce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-params-coerce/README.html