:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abacas'
.. highlight: bash

abacas
======

.. conda:recipe:: abacas
   :replaces_section_title:
   :noindex:

   ABACAS is intended to rapidly contiguate \(align\, order\, orientate\)\, visualize and design primers to close gaps on shotgun assembled contigs based on a reference sequence.

   :homepage: http://abacas.sourceforge.net/
   :documentation: http://abacas.sourceforge.net/documentation.html
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`abacas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abacas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abacas/meta.yaml>`_

   


.. conda:package:: abacas

   |downloads_abacas| |docker_abacas|

   :versions:
      
      

      ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``

      

   
   :depends on mummer: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install abacas

to add into an existing workspace instead, run::

    pixi add abacas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install abacas

Alternatively, to install into a new environment, run::

    conda create -n envname abacas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/abacas:<tag>

(see `abacas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_abacas| image:: https://img.shields.io/conda/dn/bioconda/abacas.svg?style=flat
   :target: https://anaconda.org/bioconda/abacas
   :alt:   (downloads)
.. |docker_abacas| image:: https://quay.io/repository/biocontainers/abacas/status
   :target: https://quay.io/repository/biocontainers/abacas
.. _`abacas/tags`: https://quay.io/repository/biocontainers/abacas?tab=tags


.. raw:: html

    <script>
        var package = "abacas";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abacas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abacas/README.html