:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samclip'
.. highlight: bash

samclip
=======

.. conda:recipe:: samclip
   :replaces_section_title:
   :noindex:

   Filter SAM file for soft and hard clipped alignments

   :homepage: https://github.com/tseemann/samclip
   :license: GPL-3.0
   :recipe: /`samclip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samclip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samclip/meta.yaml>`_

   


.. conda:package:: samclip

   |downloads_samclip| |docker_samclip|

   :versions:
      
      

      ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends perl: 
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

      mamba install samclip

   and update with::

      mamba update samclip

  To create a new environment, run::

      mamba create --name myenvname samclip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/samclip:<tag>

   (see `samclip/tags`_ for valid values for ``<tag>``)


.. |downloads_samclip| image:: https://img.shields.io/conda/dn/bioconda/samclip.svg?style=flat
   :target: https://anaconda.org/bioconda/samclip
   :alt:   (downloads)
.. |docker_samclip| image:: https://quay.io/repository/biocontainers/samclip/status
   :target: https://quay.io/repository/biocontainers/samclip
.. _`samclip/tags`: https://quay.io/repository/biocontainers/samclip?tab=tags


.. raw:: html

    <script>
        var package = "samclip";
        var versions = ["0.4.0","0.4.0","0.3.0","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samclip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samclip/README.html