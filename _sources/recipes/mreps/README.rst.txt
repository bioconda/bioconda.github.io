:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mreps'
.. highlight: bash

mreps
=====

.. conda:recipe:: mreps
   :replaces_section_title:
   :noindex:

   mreps is a flexible and efficient software for identifying serial repeats \(usually called tandem repeats\) in DNA sequences.

   :homepage: http://mreps.univ-mlv.fr
   :license: GPL / GPL-2.0-or-later
   :recipe: /`mreps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mreps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mreps/meta.yaml>`_
   :links: biotools: :biotools:`mreps`

   


.. conda:package:: mreps

   |downloads_mreps| |docker_mreps|

   :versions:
      
      

      ``2.6.01-6``,  ``2.6.01-5``,  ``2.6.01-4``,  ``2.6.01-3``,  ``2.6.01-2``,  ``2.6.01-1``,  ``2.6.01-0``,  ``0.1-0``

      

   
   :depends libgcc: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mreps

   and update with::

      mamba update mreps

  To create a new environment, run::

      mamba create --name myenvname mreps

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mreps:<tag>

   (see `mreps/tags`_ for valid values for ``<tag>``)


.. |downloads_mreps| image:: https://img.shields.io/conda/dn/bioconda/mreps.svg?style=flat
   :target: https://anaconda.org/bioconda/mreps
   :alt:   (downloads)
.. |docker_mreps| image:: https://quay.io/repository/biocontainers/mreps/status
   :target: https://quay.io/repository/biocontainers/mreps
.. _`mreps/tags`: https://quay.io/repository/biocontainers/mreps?tab=tags


.. raw:: html

    <script>
        var package = "mreps";
        var versions = ["2.6.01","2.6.01","2.6.01","2.6.01","2.6.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mreps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mreps/README.html