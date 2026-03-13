:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repic'
.. highlight: bash

repic
=====

.. conda:recipe:: repic
   :replaces_section_title:
   :noindex:

   REPIC \- an ensemble learning approach to cryo\-EM particle picking.

   :homepage: https://github.com/ccameron/REPIC
   :documentation: https://repic.readthedocs.io/en/latest/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`repic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repic/meta.yaml>`_

   REliable PIcking by Consensus \(REPIC\) is an ensemble learning approach to cryogenic\-electron microscopy \(cryo\-EM\) particle picking. It identifies particles common to multiple picked particle sets \(i.e.\, consensus particles\) using graph theory and integer linear programming \(ILP\). Picked particle sets may be found by a human specialist \(manual\)\, template matching\, mathematical function \(e.g.\, RELION\'s Laplacian\-of\-Gaussian auto\-picking\)\, or machine\-learning method. REPIC expects particle sets to be in BOX file format \(\*.box\) where each particle has coordinates\, a detection box size \(in pixels\)\, and \(optional\) a score \[0\-1\].


.. conda:package:: repic

   |downloads_repic| |docker_repic|

   :versions:
      
      

      ``1.0.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``,  ``0.0.0-0``

      

   
   :depends on matplotlib-base: ``>=3.2.2``
   :depends on mrcfile: ``>=1.4.3``
   :depends on networkx: ``>=2.8.4``
   :depends on numpy: ``>=1.24.2``
   :depends on pandas: 
   :depends on python: ``>=3.8.16``
   :depends on scipy: ``>=1.10.0``
   :depends on tqdm: 

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

    pixi global install repic

to add into an existing workspace instead, run::

    pixi add repic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install repic

Alternatively, to install into a new environment, run::

    conda create -n envname repic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/repic:<tag>

(see `repic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_repic| image:: https://img.shields.io/conda/dn/bioconda/repic.svg?style=flat
   :target: https://anaconda.org/bioconda/repic
   :alt:   (downloads)
.. |docker_repic| image:: https://quay.io/repository/biocontainers/repic/status
   :target: https://quay.io/repository/biocontainers/repic
.. _`repic/tags`: https://quay.io/repository/biocontainers/repic?tab=tags


.. raw:: html

    <script>
        var package = "repic";
        var versions = ["1.0.0","0.2.1","0.2.0","0.1.0","0.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repic/README.html