:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tie-toobject'
.. highlight: bash

perl-tie-toobject
=================

.. conda:recipe:: perl-tie-toobject/0.03
   :replaces_section_title:
   :noindex:

   Tie to an existing object.

   :homepage: http://metacpan.org/pod/Tie::ToObject
   :license: perl_5
   :recipe: /`perl-tie-toobject <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-toobject>`_/`0.03 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-toobject/0.03>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-toobject/0.03/meta.yaml>`_

   


.. conda:package:: perl-tie-toobject

   |downloads_perl-tie-toobject| |docker_perl-tie-toobject|

   :versions:
      
      

      ``0.03-3``,  ``0.03-2``,  ``0.03-1``,  ``0.03-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-test-more: 
   :depends perl-tie-refhash: 
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

      mamba install perl-tie-toobject

   and update with::

      mamba update perl-tie-toobject

  To create a new environment, run::

      mamba create --name myenvname perl-tie-toobject

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-tie-toobject:<tag>

   (see `perl-tie-toobject/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-tie-toobject| image:: https://img.shields.io/conda/dn/bioconda/perl-tie-toobject.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tie-toobject
   :alt:   (downloads)
.. |docker_perl-tie-toobject| image:: https://quay.io/repository/biocontainers/perl-tie-toobject/status
   :target: https://quay.io/repository/biocontainers/perl-tie-toobject
.. _`perl-tie-toobject/tags`: https://quay.io/repository/biocontainers/perl-tie-toobject?tab=tags


.. raw:: html

    <script>
        var package = "perl-tie-toobject";
        var versions = ["0.03","0.03","0.03","0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tie-toobject/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tie-toobject/README.html