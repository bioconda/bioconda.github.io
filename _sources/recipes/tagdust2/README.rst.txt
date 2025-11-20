:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tagdust2'
.. highlight: bash

tagdust2
========

.. conda:recipe:: tagdust2
   :replaces_section_title:
   :noindex:

   Tool to extract high confidence reads from sequencing data

   :homepage: https://github.com/aradar46/tagdust
   :license: GPL-3.0-only
   :recipe: /`tagdust2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagdust2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagdust2/meta.yaml>`_

   TagDust2 filters NGS reads using HMMs\, removes artifacts\, and can simulate reads.



.. conda:package:: tagdust2

   |downloads_tagdust2| |docker_tagdust2|

   :versions:
      
      

      ``2.33.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends pthread-stubs: 
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

      mamba install tagdust2

   and update with::

      mamba update tagdust2

  To create a new environment, run::

      mamba create --name myenvname tagdust2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tagdust2:<tag>

   (see `tagdust2/tags`_ for valid values for ``<tag>``)


.. |downloads_tagdust2| image:: https://img.shields.io/conda/dn/bioconda/tagdust2.svg?style=flat
   :target: https://anaconda.org/bioconda/tagdust2
   :alt:   (downloads)
.. |docker_tagdust2| image:: https://quay.io/repository/biocontainers/tagdust2/status
   :target: https://quay.io/repository/biocontainers/tagdust2
.. _`tagdust2/tags`: https://quay.io/repository/biocontainers/tagdust2?tab=tags


.. raw:: html

    <script>
        var package = "tagdust2";
        var versions = ["2.33.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tagdust2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tagdust2/README.html