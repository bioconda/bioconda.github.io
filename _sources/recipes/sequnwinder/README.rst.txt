:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequnwinder'
.. highlight: bash

sequnwinder
===========

.. conda:recipe:: sequnwinder
   :replaces_section_title:
   :noindex:

   SeqUnwinder is a framework for characterizing class\-discriminative motifs in a collection of genomic loci that have several \(overlapping\) annotation labels.

   :homepage: http://mahonylab.org/software/sequnwinder/
   :license: MIT
   :recipe: /`sequnwinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequnwinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequnwinder/meta.yaml>`_

   


.. conda:package:: sequnwinder

   |downloads_sequnwinder| |docker_sequnwinder|

   :versions:
      
      

      ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends on meme: ``>=4.11.2``
   :depends on openjdk: ``>=8``

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

    pixi global install sequnwinder

to add into an existing workspace instead, run::

    pixi add sequnwinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sequnwinder

Alternatively, to install into a new environment, run::

    conda create -n envname sequnwinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sequnwinder:<tag>

(see `sequnwinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sequnwinder| image:: https://img.shields.io/conda/dn/bioconda/sequnwinder.svg?style=flat
   :target: https://anaconda.org/bioconda/sequnwinder
   :alt:   (downloads)
.. |docker_sequnwinder| image:: https://quay.io/repository/biocontainers/sequnwinder/status
   :target: https://quay.io/repository/biocontainers/sequnwinder
.. _`sequnwinder/tags`: https://quay.io/repository/biocontainers/sequnwinder?tab=tags


.. raw:: html

    <script>
        var package = "sequnwinder";
        var versions = ["0.1.4","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequnwinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequnwinder/README.html