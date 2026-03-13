:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmerfinder'
.. highlight: bash

kmerfinder
==========

.. conda:recipe:: kmerfinder
   :replaces_section_title:
   :noindex:

   Prediction of bacterial species using a fast K\-mer algorithm.

   :homepage: https://bitbucket.org/genomicepidemiology/kmerfinder
   :license: APACHE / APACHE-2.0
   :recipe: /`kmerfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmerfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmerfinder/meta.yaml>`_

   


.. conda:package:: kmerfinder

   |downloads_kmerfinder| |docker_kmerfinder|

   :versions:
      
      

      ``3.0.2-0``

      

   
   :depends on kma: 
   :depends on python: ``>=3.5``

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

    pixi global install kmerfinder

to add into an existing workspace instead, run::

    pixi add kmerfinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kmerfinder

Alternatively, to install into a new environment, run::

    conda create -n envname kmerfinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kmerfinder:<tag>

(see `kmerfinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kmerfinder| image:: https://img.shields.io/conda/dn/bioconda/kmerfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/kmerfinder
   :alt:   (downloads)
.. |docker_kmerfinder| image:: https://quay.io/repository/biocontainers/kmerfinder/status
   :target: https://quay.io/repository/biocontainers/kmerfinder
.. _`kmerfinder/tags`: https://quay.io/repository/biocontainers/kmerfinder?tab=tags


.. raw:: html

    <script>
        var package = "kmerfinder";
        var versions = ["3.0.2"];
    </script>





Notes
-----
KmerFinder requires a database that can be downloaded with download\-db.sh.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmerfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmerfinder/README.html