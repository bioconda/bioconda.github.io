:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hs-blastn'
.. highlight: bash

hs-blastn
=========

.. conda:recipe:: hs-blastn
   :replaces_section_title:
   :noindex:

   hs\-blastn\, a fast and accurate nucleotide\-nucleotide sequences aligner.

   :homepage: https://github.com/chenying2016/queries
   :license: GPL-3.0
   :recipe: /`hs-blastn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hs-blastn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hs-blastn/meta.yaml>`_

   


.. conda:package:: hs-blastn

   |downloads_hs-blastn| |docker_hs-blastn|

   :versions:
      
      

      ``0.0.5-6``,  ``0.0.5-5``,  ``0.0.5-4``,  ``0.0.5-3``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``

      

   
   :depends on blast: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install hs-blastn

to add into an existing workspace instead, run::

    pixi add hs-blastn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hs-blastn

Alternatively, to install into a new environment, run::

    conda create -n envname hs-blastn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hs-blastn:<tag>

(see `hs-blastn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hs-blastn| image:: https://img.shields.io/conda/dn/bioconda/hs-blastn.svg?style=flat
   :target: https://anaconda.org/bioconda/hs-blastn
   :alt:   (downloads)
.. |docker_hs-blastn| image:: https://quay.io/repository/biocontainers/hs-blastn/status
   :target: https://quay.io/repository/biocontainers/hs-blastn
.. _`hs-blastn/tags`: https://quay.io/repository/biocontainers/hs-blastn?tab=tags


.. raw:: html

    <script>
        var package = "hs-blastn";
        var versions = ["0.0.5","0.0.5","0.0.5","0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hs-blastn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hs-blastn/README.html