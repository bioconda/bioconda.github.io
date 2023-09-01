:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haystac'
.. highlight: bash

haystac
=======

.. conda:recipe:: haystac
   :replaces_section_title:
   :noindex:

   Species identification pipeline for both single species and metagenomic samples.

   :homepage: https://github.com/antonisdim/haystac
   :documentation: https://haystac.readthedocs.io/en/master/
   
   :license: MIT / MIT
   :recipe: /`haystac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haystac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haystac/meta.yaml>`_

   


.. conda:package:: haystac

   |downloads_haystac| |docker_haystac|

   :versions:
      
      

      ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3-0``,  ``0.2-0``

      

   
   :depends argparse: ``1.4.0.*``
   :depends numpy: ``1.19.2.*``
   :depends pandas: ``1.0.3.*``
   :depends psutil: ``5.7.2.*``
   :depends python: ``3.6.7.*``
   :depends pyyaml: ``5.4.1.*``
   :depends requests: ``2.24.0.*``
   :depends snakemake-minimal: ``6.3.0.*``
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

      mamba install haystac

   and update with::

      mamba update haystac

  To create a new environment, run::

      mamba create --name myenvname haystac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/haystac:<tag>

   (see `haystac/tags`_ for valid values for ``<tag>``)


.. |downloads_haystac| image:: https://img.shields.io/conda/dn/bioconda/haystac.svg?style=flat
   :target: https://anaconda.org/bioconda/haystac
   :alt:   (downloads)
.. |docker_haystac| image:: https://quay.io/repository/biocontainers/haystac/status
   :target: https://quay.io/repository/biocontainers/haystac
.. _`haystac/tags`: https://quay.io/repository/biocontainers/haystac?tab=tags


.. raw:: html

    <script>
        var package = "haystac";
        var versions = ["0.4.10","0.4.9","0.4.8","0.4.7","0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haystac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haystac/README.html