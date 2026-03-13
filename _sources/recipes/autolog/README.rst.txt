:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'autolog'
.. highlight: bash

autolog
=======

.. conda:recipe:: autolog
   :replaces_section_title:
   :noindex:

   quick and easy logging setup

   :homepage: http://noble.gs.washington.edu/~mmh1/software/autolog/
   :license: GNU General Public License (GPL)
   :recipe: /`autolog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autolog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autolog/meta.yaml>`_

   


.. conda:package:: autolog

   |downloads_autolog| |docker_autolog|

   :versions:
      
      

      ``0.2-0``,  ``0.1.3-2``,  ``0.1.3-0``

      

   
   :depends on path.py: 
   :depends on python: 
   :depends on six: 

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

    pixi global install autolog

to add into an existing workspace instead, run::

    pixi add autolog

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install autolog

Alternatively, to install into a new environment, run::

    conda create -n envname autolog

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/autolog:<tag>

(see `autolog/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_autolog| image:: https://img.shields.io/conda/dn/bioconda/autolog.svg?style=flat
   :target: https://anaconda.org/bioconda/autolog
   :alt:   (downloads)
.. |docker_autolog| image:: https://quay.io/repository/biocontainers/autolog/status
   :target: https://quay.io/repository/biocontainers/autolog
.. _`autolog/tags`: https://quay.io/repository/biocontainers/autolog?tab=tags


.. raw:: html

    <script>
        var package = "autolog";
        var versions = ["0.2","0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/autolog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/autolog/README.html