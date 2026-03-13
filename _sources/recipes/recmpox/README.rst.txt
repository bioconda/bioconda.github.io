:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recmpox'
.. highlight: bash

recmpox
=======

.. conda:recipe:: recmpox
   :replaces_section_title:
   :noindex:

   RecMpox flags potential recombination events in monkeypox consensus genomes.

   :homepage: https://github.com/DaanJansen94/RecMpox
   :documentation: https://github.com/DaanJansen94/RecMpox/blob/main/README.md
   
   :license: GPL / GPL-3.0-or-later
   :recipe: /`recmpox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recmpox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recmpox/meta.yaml>`_

   RecMpox is a command\-line tool that flags potential recombination events in monkeypox viruses.
   It identifies recombination tract breakpoints within your own provided consensus genomes.
   It does not confirm recombination\; it flags genomes that may be recombinant for further investigation.
   RecMpox takes two references \(e.g. Clade Ia vs Ib\, or IIa vs IIb\)\, aligns them with Squirrel\,
   finds diagnostic SNP positions where the references differ\, then classifies each consensus genome
   at those positions. Genomes where both refs contribute at least 5\% are flagged as potential
   recombinants. Recombination tracts and breakpoints are inferred along the genome.



.. conda:package:: recmpox

   |downloads_recmpox| |docker_recmpox|

   :versions:
      
      

      ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends on minimap2: 
   :depends on python: ``>=3.9``
   :depends on samtools: 
   :depends on squirrel: 

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

    pixi global install recmpox

to add into an existing workspace instead, run::

    pixi add recmpox

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install recmpox

Alternatively, to install into a new environment, run::

    conda create -n envname recmpox

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/recmpox:<tag>

(see `recmpox/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_recmpox| image:: https://img.shields.io/conda/dn/bioconda/recmpox.svg?style=flat
   :target: https://anaconda.org/bioconda/recmpox
   :alt:   (downloads)
.. |docker_recmpox| image:: https://quay.io/repository/biocontainers/recmpox/status
   :target: https://quay.io/repository/biocontainers/recmpox
.. _`recmpox/tags`: https://quay.io/repository/biocontainers/recmpox?tab=tags


.. raw:: html

    <script>
        var package = "recmpox";
        var versions = ["0.0.4","0.0.3","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recmpox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recmpox/README.html