:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shannon'
.. highlight: bash

shannon
=======

.. conda:recipe:: shannon
   :replaces_section_title:
   :noindex:

   A program for assembling transcripts from RNA\-Seq data.

   :homepage: http://sreeramkannan.github.io/Shannon/
   :developer docs: https://github.com/sreeramkannan/Shannon
   :license: GPL3 / GPLv3
   :recipe: /`shannon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shannon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shannon/meta.yaml>`_

   


.. conda:package:: shannon

   |downloads_shannon| |docker_shannon|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends on cvxopt: 
   :depends on kmer-jellyfish: 
   :depends on metis: 
   :depends on numpy: 
   :depends on parallel: 
   :depends on python: ``<3``
   :depends on quorum: 

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

    pixi global install shannon

to add into an existing workspace instead, run::

    pixi add shannon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shannon

Alternatively, to install into a new environment, run::

    conda create -n envname shannon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shannon:<tag>

(see `shannon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shannon| image:: https://img.shields.io/conda/dn/bioconda/shannon.svg?style=flat
   :target: https://anaconda.org/bioconda/shannon
   :alt:   (downloads)
.. |docker_shannon| image:: https://quay.io/repository/biocontainers/shannon/status
   :target: https://quay.io/repository/biocontainers/shannon
.. _`shannon/tags`: https://quay.io/repository/biocontainers/shannon?tab=tags


.. raw:: html

    <script>
        var package = "shannon";
        var versions = ["0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shannon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shannon/README.html