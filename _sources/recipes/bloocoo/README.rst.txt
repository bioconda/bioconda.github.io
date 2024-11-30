:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bloocoo'
.. highlight: bash

bloocoo
=======

.. conda:recipe:: bloocoo
   :replaces_section_title:
   :noindex:

   Bloocoo is a k\-mer spectrum\-based read error corrector\, designed to correct large datasets with a very low memory footprint. As an example\, it can correct whole human genome re\-sequencing reads at 70 x coverage with less than 4GB of memory.

   :homepage: http://gatb.inria.fr/software/bloocoo/
   :license: aGPL v3
   :recipe: /`bloocoo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bloocoo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bloocoo/meta.yaml>`_

   


.. conda:package:: bloocoo

   |downloads_bloocoo| |docker_bloocoo|

   :versions:
      
      

      ``1.0.7-6``,  ``1.0.7-5``,  ``1.0.7-4``,  ``1.0.7-3``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install bloocoo

   and update with::

      mamba update bloocoo

  To create a new environment, run::

      mamba create --name myenvname bloocoo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bloocoo:<tag>

   (see `bloocoo/tags`_ for valid values for ``<tag>``)


.. |downloads_bloocoo| image:: https://img.shields.io/conda/dn/bioconda/bloocoo.svg?style=flat
   :target: https://anaconda.org/bioconda/bloocoo
   :alt:   (downloads)
.. |docker_bloocoo| image:: https://quay.io/repository/biocontainers/bloocoo/status
   :target: https://quay.io/repository/biocontainers/bloocoo
.. _`bloocoo/tags`: https://quay.io/repository/biocontainers/bloocoo?tab=tags


.. raw:: html

    <script>
        var package = "bloocoo";
        var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bloocoo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bloocoo/README.html