:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'roary'
.. highlight: bash

roary
=====

.. conda:recipe:: roary
   :replaces_section_title:
   :noindex:

   Rapid large\-scale prokaryote pan genome analysis

   :homepage: https://github.com/sanger-pathogens/Roary
   :license: GPL-3.0
   :recipe: /`roary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roary/meta.yaml>`_
   :links: biotools: :biotools:`roary`, usegalaxy-eu: :usegalaxy-eu:`roary`

   


.. conda:package:: roary

   |downloads_roary| |docker_roary|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.13.0-1</code>,  <code>3.13.0-0</code>,  <code>3.12.0-2</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  <code>3.10.2-0</code>,  <code>3.9.1-0</code>,  <code>3.8.2-0</code>,  <code>3.8.0-1</code>,  </span></summary>
      

      ``3.13.0-1``,  ``3.13.0-0``,  ``3.12.0-2``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.10.2-0``,  ``3.9.1-0``,  ``3.8.2-0``,  ``3.8.0-1``,  ``3.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on blast: 
   :depends on cd-hit: 
   :depends on fasttree: 
   :depends on mafft: 
   :depends on mcl: 
   :depends on parallel: ``>=20180522``
   :depends on perl: ``>=5.26.2,<5.26.3.0a0``
   :depends on perl-array-utils: 
   :depends on perl-bioperl: ``>=1.7.2``
   :depends on perl-digest-md5-file: 
   :depends on perl-exception-class: 
   :depends on perl-file-find-rule: 
   :depends on perl-file-grep: 
   :depends on perl-file-path: 
   :depends on perl-file-slurper: 
   :depends on perl-file-temp: 
   :depends on perl-file-which: 
   :depends on perl-getopt-long: 
   :depends on perl-graph: 
   :depends on perl-graph-readwrite: 
   :depends on perl-log-log4perl: 
   :depends on perl-moose: 
   :depends on perl-perlio-utf8_strict: 
   :depends on perl-text-csv: 
   :depends on prank: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install roary

to add into an existing workspace instead, run::

    pixi add roary

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install roary

Alternatively, to install into a new environment, run::

    conda create -n envname roary

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/roary:<tag>

(see `roary/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_roary| image:: https://img.shields.io/conda/dn/bioconda/roary.svg?style=flat
   :target: https://anaconda.org/bioconda/roary
   :alt:   (downloads)
.. |docker_roary| image:: https://quay.io/repository/biocontainers/roary/status
   :target: https://quay.io/repository/biocontainers/roary
.. _`roary/tags`: https://quay.io/repository/biocontainers/roary?tab=tags


.. raw:: html

    <script>
        var package = "roary";
        var versions = ["3.13.0","3.13.0","3.12.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/roary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/roary/README.html