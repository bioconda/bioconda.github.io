:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'el_gato'
.. highlight: bash

el_gato
=======

.. conda:recipe:: el_gato
   :replaces_section_title:
   :noindex:

   Perform Legionella pneumophila Sequence Based Typing \(SBT\) from short reads or assemblies.

   :homepage: https://github.com/appliedbinf/el_gato
   :documentation: https://github.com/appliedbinf/el_gato/blob/1.20.2/README.md
   
   :license: MIT / MIT
   :recipe: /`el_gato <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/el_gato>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/el_gato/meta.yaml>`_

   


.. conda:package:: el_gato

   |downloads_el_gato| |docker_el_gato|

   :versions:
      
      

      ``1.20.2-0``,  ``1.20.1-0``,  ``1.19.0-0``,  ``1.18.2-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.15.2-0``,  ``1.15.0-0``,  ``1.14.4-0``

      

   
   :depends blast: ``>=2.13``
   :depends colorama: 
   :depends fpdf2: 
   :depends ispcr: ``>=33.0``
   :depends minimap2: ``>=2.24``
   :depends nextflow: 
   :depends packaging: 
   :depends python: ``>=3.8,<3.12``
   :depends samtools: ``>=1.15.1``
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

      mamba install el_gato

   and update with::

      mamba update el_gato

  To create a new environment, run::

      mamba create --name myenvname el_gato

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/el_gato:<tag>

   (see `el_gato/tags`_ for valid values for ``<tag>``)


.. |downloads_el_gato| image:: https://img.shields.io/conda/dn/bioconda/el_gato.svg?style=flat
   :target: https://anaconda.org/bioconda/el_gato
   :alt:   (downloads)
.. |docker_el_gato| image:: https://quay.io/repository/biocontainers/el_gato/status
   :target: https://quay.io/repository/biocontainers/el_gato
.. _`el_gato/tags`: https://quay.io/repository/biocontainers/el_gato?tab=tags


.. raw:: html

    <script>
        var package = "el_gato";
        var versions = ["1.20.2","1.20.1","1.19.0","1.18.2","1.18.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/el_gato/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/el_gato/README.html