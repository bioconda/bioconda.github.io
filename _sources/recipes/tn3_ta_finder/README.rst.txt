:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tn3_ta_finder'
.. highlight: bash

tn3_ta_finder
=============

.. conda:recipe:: tn3_ta_finder
   :replaces_section_title:
   :noindex:

   Tn3 transposon and type II toxin\-antitoxin finder for bacterial and archaeal genomes

   :homepage: https://github.com/danillo-alvarenga/tn3-ta_finder
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`tn3_ta_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tn3_ta_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tn3_ta_finder/meta.yaml>`_

   Tn3\+TA\_finder is a program for the automatic prediction of transposable
   elements of the Tn3 family associated with type II toxin and antitoxin
   pairs in bacteria and archaea. It compares bacterial and archaeal genome
   sequences to custom Tn3 transposase\+resolvase and type II toxin\+antitoxin
   databases



.. conda:package:: tn3_ta_finder

   |downloads_tn3_ta_finder| |docker_tn3_ta_finder|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on biopython: ``>=1.66,<1.78``
   :depends on blast: ``>=2.2.28``
   :depends on prodigal: ``>=2.6.1``
   :depends on python: ``>=3.6``

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

    pixi global install tn3_ta_finder

to add into an existing workspace instead, run::

    pixi add tn3_ta_finder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tn3_ta_finder

Alternatively, to install into a new environment, run::

    conda create -n envname tn3_ta_finder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tn3_ta_finder:<tag>

(see `tn3_ta_finder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tn3_ta_finder| image:: https://img.shields.io/conda/dn/bioconda/tn3_ta_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/tn3_ta_finder
   :alt:   (downloads)
.. |docker_tn3_ta_finder| image:: https://quay.io/repository/biocontainers/tn3_ta_finder/status
   :target: https://quay.io/repository/biocontainers/tn3_ta_finder
.. _`tn3_ta_finder/tags`: https://quay.io/repository/biocontainers/tn3_ta_finder?tab=tags


.. raw:: html

    <script>
        var package = "tn3_ta_finder";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tn3_ta_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tn3_ta_finder/README.html