:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lorikeet'
.. highlight: bash

lorikeet
========

.. conda:recipe:: lorikeet
   :replaces_section_title:
   :noindex:

   Tool for digital spoligotyping of MTB strains from Illumina read data

   :homepage: https://github.com/AbeelLab/lorikeet
   :license: GPL / GPL-3
   :recipe: /`lorikeet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorikeet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorikeet/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pmed.1001880`

   


.. conda:package:: lorikeet

   |downloads_lorikeet| |docker_lorikeet|

   :versions:
      
      

      ``20-1``,  ``20-0``,  ``19-0``,  ``17-0``

      

   
   :depends on openjdk: 

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

    pixi global install lorikeet

to add into an existing workspace instead, run::

    pixi add lorikeet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lorikeet

Alternatively, to install into a new environment, run::

    conda create -n envname lorikeet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lorikeet:<tag>

(see `lorikeet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lorikeet| image:: https://img.shields.io/conda/dn/bioconda/lorikeet.svg?style=flat
   :target: https://anaconda.org/bioconda/lorikeet
   :alt:   (downloads)
.. |docker_lorikeet| image:: https://quay.io/repository/biocontainers/lorikeet/status
   :target: https://quay.io/repository/biocontainers/lorikeet
.. _`lorikeet/tags`: https://quay.io/repository/biocontainers/lorikeet?tab=tags


.. raw:: html

    <script>
        var package = "lorikeet";
        var versions = ["20","20","19","17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lorikeet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lorikeet/README.html