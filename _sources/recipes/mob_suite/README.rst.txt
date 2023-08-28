:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mob_suite'
.. highlight: bash

mob_suite
=========

.. conda:recipe:: mob_suite
   :replaces_section_title:
   :noindex:

   MOB\-suite is a set of tools for finding\, typing and reconstruction of plasmids from draft and complete genome assemblies.

   :homepage: https://pypi.org/project/mob-suite/
   :developer docs: https://github.com/phac-nml/mob-suite
   :license: Apache-2.0
   :recipe: /`mob_suite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mob_suite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mob_suite/meta.yaml>`_
   :links: biotools: :biotools:`mob-suite`, usegalaxy-eu: :usegalaxy-eu:`mob_recon`, usegalaxy-eu: :usegalaxy-eu:`mob_typer`, doi: :doi:`10.1099/mgen.0.000206`, doi: :doi:`10.1099/mgen.0.000435`

   


.. conda:package:: mob_suite

   |downloads_mob_suite| |docker_mob_suite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.6-0</code>,  <code>3.1.5-0</code>,  <code>3.1.4-0</code>,  <code>3.1.2-0</code>,  <code>3.1.0-0</code>,  <code>3.0.3-0</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-2</code>,  </span></summary>
      

      ``3.1.6-0``,  ``3.1.5-0``,  ``3.1.4-0``,  ``3.1.2-0``,  ``3.1.0-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.1.0-0``,  ``2.0.5-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.4.9.1-0``,  ``1.4.9-1``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.6-1``,  ``1.4.5-1``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.8,<2``
   :depends blast: ``>=2.9.0``
   :depends ete3: 
   :depends mash: ``>=2.0``
   :depends numpy: ``>=1.11.1,<1.23.5``
   :depends pandas: ``>=0.22.0,<=1.0.5``
   :depends pycurl: 
   :depends pytables: 
   :depends python: ``>=3.7``
   :depends scipy: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mob_suite

   and update with::

      mamba update mob_suite

  To create a new environment, run::

      mamba create --name myenvname mob_suite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mob_suite:<tag>

   (see `mob_suite/tags`_ for valid values for ``<tag>``)


.. |downloads_mob_suite| image:: https://img.shields.io/conda/dn/bioconda/mob_suite.svg?style=flat
   :target: https://anaconda.org/bioconda/mob_suite
   :alt:   (downloads)
.. |docker_mob_suite| image:: https://quay.io/repository/biocontainers/mob_suite/status
   :target: https://quay.io/repository/biocontainers/mob_suite
.. _`mob_suite/tags`: https://quay.io/repository/biocontainers/mob_suite?tab=tags


.. raw:: html

    <script>
        var package = "mob_suite";
        var versions = ["3.1.6","3.1.5","3.1.4","3.1.2","3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mob_suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mob_suite/README.html