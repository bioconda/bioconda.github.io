:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mobster'
.. highlight: bash

mobster
=======

.. conda:recipe:: mobster
   :replaces_section_title:
   :noindex:

   NGS tool for detecting MEI and gene retrotransposition events in WGS and WES data\, see Thung et al. Genome Biol. 2014 for more information.

   :homepage: https://github.com/jyhehir/mobster
   :license: GPL3
   :recipe: /`mobster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mobster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mobster/meta.yaml>`_

   


.. conda:package:: mobster

   |downloads_mobster| |docker_mobster|

   :versions:
      
      

      ``0.2.4.1-1``,  ``0.2.4.1-0``,  ``0.2.3.1-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends mosaik: 
   :depends openjdk: 
   :depends python: 
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

      mamba install mobster

   and update with::

      mamba update mobster

  To create a new environment, run::

      mamba create --name myenvname mobster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mobster:<tag>

   (see `mobster/tags`_ for valid values for ``<tag>``)


.. |downloads_mobster| image:: https://img.shields.io/conda/dn/bioconda/mobster.svg?style=flat
   :target: https://anaconda.org/bioconda/mobster
   :alt:   (downloads)
.. |docker_mobster| image:: https://quay.io/repository/biocontainers/mobster/status
   :target: https://quay.io/repository/biocontainers/mobster
.. _`mobster/tags`: https://quay.io/repository/biocontainers/mobster?tab=tags


.. raw:: html

    <script>
        var package = "mobster";
        var versions = ["0.2.4.1","0.2.4.1","0.2.3.1","0.2.2","0.2.2"];
    </script>





Notes
-----
After installation\, mobster is available as command \`mobster\`.
Further\, you can convert mobster output to vcf with the command \`mobster\-to\-vcf\`.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mobster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mobster/README.html