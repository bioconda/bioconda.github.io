:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parafly'
.. highlight: bash

parafly
=======

.. conda:recipe:: parafly
   :replaces_section_title:
   :noindex:

   Given a file containing a list of unix commands\, multithreading is used to process the commands in parallel on a single server. Success\/failure is captured\, and failed commands are retained and reported.

   :homepage: http://parafly.sourceforge.net/
   :license: The Broad Institute (own license thingy)
   :recipe: /`parafly <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parafly>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parafly/meta.yaml>`_

   


.. conda:package:: parafly

   |downloads_parafly| |docker_parafly|

   :versions:
      
      

      ``r2013_01_21-3``,  ``r2013_01_21-1``,  ``r2013_01_21-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends zlib: 
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

      mamba install parafly

   and update with::

      mamba update parafly

  To create a new environment, run::

      mamba create --name myenvname parafly

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/parafly:<tag>

   (see `parafly/tags`_ for valid values for ``<tag>``)


.. |downloads_parafly| image:: https://img.shields.io/conda/dn/bioconda/parafly.svg?style=flat
   :target: https://anaconda.org/bioconda/parafly
   :alt:   (downloads)
.. |docker_parafly| image:: https://quay.io/repository/biocontainers/parafly/status
   :target: https://quay.io/repository/biocontainers/parafly
.. _`parafly/tags`: https://quay.io/repository/biocontainers/parafly?tab=tags


.. raw:: html

    <script>
        var package = "parafly";
        var versions = ["r2013_01_21","r2013_01_21","r2013_01_21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parafly/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parafly/README.html