:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'espresso'
.. highlight: bash

espresso
========

.. conda:recipe:: espresso
   :replaces_section_title:
   :noindex:

   ESPRESSO \(Error Statistics PRomoted Evaluator of Splice Site Options\) processes long read RNA\-seq data

   :homepage: https://github.com/Xinglab/espresso
   :license: Free for non-commercial use, see LICENSE file
   :recipe: /`espresso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/espresso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/espresso/meta.yaml>`_

   


.. conda:package:: espresso

   |downloads_espresso| |docker_espresso|

   :versions:
      
      

      ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.1-0``

      

   
   :depends blast: ``>=2.8.1``
   :depends hmmer: ``>=3.3.1``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl: ``>=5.8``
   :depends perl-storable: ``>=3.0``
   :depends samtools: ``>=1.6``
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

      mamba install espresso

   and update with::

      mamba update espresso

  To create a new environment, run::

      mamba create --name myenvname espresso

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/espresso:<tag>

   (see `espresso/tags`_ for valid values for ``<tag>``)


.. |downloads_espresso| image:: https://img.shields.io/conda/dn/bioconda/espresso.svg?style=flat
   :target: https://anaconda.org/bioconda/espresso
   :alt:   (downloads)
.. |docker_espresso| image:: https://quay.io/repository/biocontainers/espresso/status
   :target: https://quay.io/repository/biocontainers/espresso
.. _`espresso/tags`: https://quay.io/repository/biocontainers/espresso?tab=tags


.. raw:: html

    <script>
        var package = "espresso";
        var versions = ["1.5.0","1.5.0","1.4.0","1.3.2","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/espresso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/espresso/README.html