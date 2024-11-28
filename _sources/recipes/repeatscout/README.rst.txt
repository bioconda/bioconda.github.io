:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repeatscout'
.. highlight: bash

repeatscout
===========

.. conda:recipe:: repeatscout
   :replaces_section_title:
   :noindex:

   De novo identification of repeat families in large genomes.

   :homepage: https://github.com/Dfam-consortium/RepeatScout
   :documentation: https://github.com/Dfam-consortium/RepeatScout/blob/v1.0.7/README.md
   
   :license: CC0
   :recipe: /`repeatscout <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatscout>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatscout/meta.yaml>`_
   :links: biotools: :biotools:`RepeatScout`

   


.. conda:package:: repeatscout

   |downloads_repeatscout| |docker_repeatscout|

   :versions:
      
      

      ``1.0.7-0``,  ``1.0.6-3``,  ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``

      

   
   :depends libgcc: ``>=12``
   :depends nseg: 
   :depends perl: 
   :depends perl-file-temp: 
   :depends perl-file-which: 
   :depends trf: 
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

      mamba install repeatscout

   and update with::

      mamba update repeatscout

  To create a new environment, run::

      mamba create --name myenvname repeatscout

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/repeatscout:<tag>

   (see `repeatscout/tags`_ for valid values for ``<tag>``)


.. |downloads_repeatscout| image:: https://img.shields.io/conda/dn/bioconda/repeatscout.svg?style=flat
   :target: https://anaconda.org/bioconda/repeatscout
   :alt:   (downloads)
.. |docker_repeatscout| image:: https://quay.io/repository/biocontainers/repeatscout/status
   :target: https://quay.io/repository/biocontainers/repeatscout
.. _`repeatscout/tags`: https://quay.io/repository/biocontainers/repeatscout?tab=tags


.. raw:: html

    <script>
        var package = "repeatscout";
        var versions = ["1.0.7","1.0.6","1.0.6","1.0.6","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repeatscout/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repeatscout/README.html