:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unfazed'
.. highlight: bash

unfazed
=======

.. conda:recipe:: unfazed
   :replaces_section_title:
   :noindex:

   Extended read\-backed and allele\-balance phasing for de novo variation \(SNVs\, INDELS\, SVs\, and CNVs\)

   :homepage: https://github.com/jbelyeu/unfazed
   :license: MIT
   :recipe: /`unfazed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unfazed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unfazed/meta.yaml>`_

   


.. conda:package:: unfazed

   |downloads_unfazed| |docker_unfazed|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.1.5-0``

      

   
   :depends cyvcf2: 
   :depends numpy: 
   :depends pip: 
   :depends pysam: ``>=0.15.2``
   :depends python: 
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

      mamba install unfazed

   and update with::

      mamba update unfazed

  To create a new environment, run::

      mamba create --name myenvname unfazed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unfazed:<tag>

   (see `unfazed/tags`_ for valid values for ``<tag>``)


.. |downloads_unfazed| image:: https://img.shields.io/conda/dn/bioconda/unfazed.svg?style=flat
   :target: https://anaconda.org/bioconda/unfazed
   :alt:   (downloads)
.. |docker_unfazed| image:: https://quay.io/repository/biocontainers/unfazed/status
   :target: https://quay.io/repository/biocontainers/unfazed
.. _`unfazed/tags`: https://quay.io/repository/biocontainers/unfazed?tab=tags


.. raw:: html

    <script>
        var package = "unfazed";
        var versions = ["1.0.2","1.0.1","1.0.0","0.2.3","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unfazed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unfazed/README.html