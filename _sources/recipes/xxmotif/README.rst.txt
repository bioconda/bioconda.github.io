:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xxmotif'
.. highlight: bash

xxmotif
=======

.. conda:recipe:: xxmotif
   :replaces_section_title:
   :noindex:

   eXhaustive\, weight matriX\-based motif discovery in nucleotide sequences

   :homepage: https://github.com/soedinglab/xxmotif
   :license: GPLv3
   :recipe: /`xxmotif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xxmotif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xxmotif/meta.yaml>`_

   


.. conda:package:: xxmotif

   |downloads_xxmotif| |docker_xxmotif|

   :versions:
      
      

      ``1.6-4``,  ``1.6-2``,  ``1.6-1``,  ``1.6-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install xxmotif

   and update with::

      mamba update xxmotif

  To create a new environment, run::

      mamba create --name myenvname xxmotif

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xxmotif:<tag>

   (see `xxmotif/tags`_ for valid values for ``<tag>``)


.. |downloads_xxmotif| image:: https://img.shields.io/conda/dn/bioconda/xxmotif.svg?style=flat
   :target: https://anaconda.org/bioconda/xxmotif
   :alt:   (downloads)
.. |docker_xxmotif| image:: https://quay.io/repository/biocontainers/xxmotif/status
   :target: https://quay.io/repository/biocontainers/xxmotif
.. _`xxmotif/tags`: https://quay.io/repository/biocontainers/xxmotif?tab=tags


.. raw:: html

    <script>
        var package = "xxmotif";
        var versions = ["1.6","1.6","1.6","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xxmotif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xxmotif/README.html