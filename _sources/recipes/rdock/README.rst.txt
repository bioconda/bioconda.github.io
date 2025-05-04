:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rdock'
.. highlight: bash

rdock
=====

.. conda:recipe:: rdock
   :replaces_section_title:
   :noindex:

   A Fast\, Versatile and Open Source Program for Docking Ligands to Proteins and Nucleic Acids

   :homepage: https://rdock.github.io/
   :documentation: https://rdock.github.io/documentation/
   
   :developer docs: https://github.com/CBDD/rDock
   :license: LGPL / LGPL-3
   :recipe: /`rdock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdock/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1003571`, usegalaxy-eu: :usegalaxy-eu:`rdock_rbdock`

   rDock is a fast and versatile Open Source docking program that can be used to dock small molecules against proteins and nucleic acids.
   It is designed for High Throughput Virtual Screening \(HTVS\) campaigns and Binding Mode prediction studies.



.. conda:package:: rdock

   |downloads_rdock| |docker_rdock|

   :versions:
      
      

      ``2013.1-1``,  ``2013.1-0``,  ``24.04.204_legacy-1``,  ``24.04.204_legacy-0``

      

   
   :depends libgcc: 
   :depends numpy: 
   :depends openbabel: 
   :depends perl: ``5.22.0*``
   :depends popt: 
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

      mamba install rdock

   and update with::

      mamba update rdock

  To create a new environment, run::

      mamba create --name myenvname rdock

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rdock:<tag>

   (see `rdock/tags`_ for valid values for ``<tag>``)


.. |downloads_rdock| image:: https://img.shields.io/conda/dn/bioconda/rdock.svg?style=flat
   :target: https://anaconda.org/bioconda/rdock
   :alt:   (downloads)
.. |docker_rdock| image:: https://quay.io/repository/biocontainers/rdock/status
   :target: https://quay.io/repository/biocontainers/rdock
.. _`rdock/tags`: https://quay.io/repository/biocontainers/rdock?tab=tags


.. raw:: html

    <script>
        var package = "rdock";
        var versions = ["2013.1","2013.1","24.04.204_legacy","24.04.204_legacy"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rdock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rdock/README.html