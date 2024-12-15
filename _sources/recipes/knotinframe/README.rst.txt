:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'knotinframe'
.. highlight: bash

knotinframe
===========

.. conda:recipe:: knotinframe
   :replaces_section_title:
   :noindex:

   Predicts \-1 frameshift sites with simple pseudoknots

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/knotinframe
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`knotinframe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knotinframe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knotinframe/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkn578`, doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: knotinframe

   |downloads_knotinframe| |docker_knotinframe|

   :versions:
      
      

      ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.14-1``,  ``2.2.14-0``

      

   
   :depends bellmans-gapc: ``>=2020.12.08``
   :depends bellmans-gapc: ``>=2024.1.12``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl: 
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

      mamba install knotinframe

   and update with::

      mamba update knotinframe

  To create a new environment, run::

      mamba create --name myenvname knotinframe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/knotinframe:<tag>

   (see `knotinframe/tags`_ for valid values for ``<tag>``)


.. |downloads_knotinframe| image:: https://img.shields.io/conda/dn/bioconda/knotinframe.svg?style=flat
   :target: https://anaconda.org/bioconda/knotinframe
   :alt:   (downloads)
.. |docker_knotinframe| image:: https://quay.io/repository/biocontainers/knotinframe/status
   :target: https://quay.io/repository/biocontainers/knotinframe
.. _`knotinframe/tags`: https://quay.io/repository/biocontainers/knotinframe?tab=tags


.. raw:: html

    <script>
        var package = "knotinframe";
        var versions = ["2.3.2","2.3.2","2.3.1","2.3.1","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/knotinframe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/knotinframe/README.html