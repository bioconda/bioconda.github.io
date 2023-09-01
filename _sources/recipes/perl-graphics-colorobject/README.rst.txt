:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-graphics-colorobject'
.. highlight: bash

perl-graphics-colorobject
=========================

.. conda:recipe:: perl-graphics-colorobject
   :replaces_section_title:
   :noindex:

   convert between color spaces

   :homepage: http://metacpan.org/pod/Graphics::ColorObject
   :license: unknown
   :recipe: /`perl-graphics-colorobject <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graphics-colorobject>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graphics-colorobject/meta.yaml>`_

   


.. conda:package:: perl-graphics-colorobject

   |downloads_perl-graphics-colorobject| |docker_perl-graphics-colorobject|

   :versions:
      
      

      ``0.5.0-2``,  ``0.5.0-1``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-graphics-colornames: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-graphics-colorobject

   and update with::

      mamba update perl-graphics-colorobject

  To create a new environment, run::

      mamba create --name myenvname perl-graphics-colorobject

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-graphics-colorobject:<tag>

   (see `perl-graphics-colorobject/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-graphics-colorobject| image:: https://img.shields.io/conda/dn/bioconda/perl-graphics-colorobject.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-graphics-colorobject
   :alt:   (downloads)
.. |docker_perl-graphics-colorobject| image:: https://quay.io/repository/biocontainers/perl-graphics-colorobject/status
   :target: https://quay.io/repository/biocontainers/perl-graphics-colorobject
.. _`perl-graphics-colorobject/tags`: https://quay.io/repository/biocontainers/perl-graphics-colorobject?tab=tags


.. raw:: html

    <script>
        var package = "perl-graphics-colorobject";
        var versions = ["0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-graphics-colorobject/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-graphics-colorobject/README.html