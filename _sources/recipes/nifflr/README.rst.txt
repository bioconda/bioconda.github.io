:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nifflr'
.. highlight: bash

nifflr
======

.. conda:recipe:: nifflr
   :replaces_section_title:
   :noindex:

   NIFFLR\: Novel IsoForm Finder using Long RNASeq reads.

   :homepage: https://github.com/alguoo314/NIFFLR
   :documentation: https://github.com/alguoo314/NIFFLR/blob/v2.0.0/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`nifflr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nifflr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nifflr/meta.yaml>`_

   


.. conda:package:: nifflr

   |downloads_nifflr| |docker_nifflr|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libboost: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends wget: 
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

      mamba install nifflr

   and update with::

      mamba update nifflr

  To create a new environment, run::

      mamba create --name myenvname nifflr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nifflr:<tag>

   (see `nifflr/tags`_ for valid values for ``<tag>``)


.. |downloads_nifflr| image:: https://img.shields.io/conda/dn/bioconda/nifflr.svg?style=flat
   :target: https://anaconda.org/bioconda/nifflr
   :alt:   (downloads)
.. |docker_nifflr| image:: https://quay.io/repository/biocontainers/nifflr/status
   :target: https://quay.io/repository/biocontainers/nifflr
.. _`nifflr/tags`: https://quay.io/repository/biocontainers/nifflr?tab=tags


.. raw:: html

    <script>
        var package = "nifflr";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nifflr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nifflr/README.html